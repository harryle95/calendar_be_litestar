# syntax=docker/dockerfile:1

## ---------------------------------------------------------------------------------- ##
## ------------------------- Python base -------------------------------------------- ##
## ---------------------------------------------------------------------------------- ##
ARG PYTHON_BUILDER_IMAGE=3.11-slim-bookworm
FROM python:${PYTHON_BUILDER_IMAGE} as python-base
ENV PIP_DEFAULT_TIMEOUT=100 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_ROOT_USER_ACTION=ignore \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONFAULTHANDLER=1 \
    PYTHONHASHSEED=random \
    LANG=C.UTF-8 \
    LC_ALL=C.UTF-8
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends git tini \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /root/.cache \
    && rm -rf /var/apt/lists/* \
    && rm -rf /var/cache/apt/* \
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false\
    && mkdir -p /workspace/app \
    && pip install --quiet -U pip wheel setuptools virtualenv

## ---------------------------------------------------------------------------------- ##
## ------------------------- Python build base -------------------------------------- ##
## ---------------------------------------------------------------------------------- ##
FROM python-base AS build-base
ARG PDM_INSTALL_ARGS="-G:all"
ENV PDM_INSTALL_ARGS="${PDM_INSTALL_ARGS}" \
    GRPC_PYTHON_BUILD_WITH_CYTHON=1 \
    PATH="/workspace/app/.venv/bin:/usr/local/bin:$PATH"
## -------------------------- add build packages ----------------------------------- ##
RUN apt-get install -y --no-install-recommends build-essential curl \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /root/.cache \
    && rm -rf /var/apt/lists/* \
    && rm -rf /var/cache/apt/* \
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false

## -------------------------- install application ----------------------------------- ##
WORKDIR /workspace/app
COPY pyproject.toml pdm.lock .pre-commit-config.yaml Makefile \
    package.json package-lock.json vite.config.ts tsconfig.json tsconfig.node.json \
    tailwind.config.js postcss.config.js \
    ./
COPY public ./public/
RUN python -m venv --copies /workspace/app/.venv \
    && /workspace/app/.venv/bin/pip install cython pdm nodeenv  \
    && pdm install ${PDM_INSTALL_ARGS} --no-self
COPY src ./src/

## ---------------------------------------------------------------------------------- ##
## -------------------------------- development build ------------------------------- ##
## ---------------------------------------------------------------------------------- ##
## ------------------------- use builder base --------------------------------------- ##
FROM build-base as dev-image
ARG ENV_SECRETS="runtime-secrets"
ARG LITESTAR_APP="src.asgi.app:app"
## --------------------------- standardize execution env ----------------------------- ##
ENV PATH="/workspace/app/.venv/bin:$PATH" \
    VIRTUAL_ENV="/workspace/app/.venv" \
    ENV_SECRETS="${ENV_SECRETS}"  \
    PIP_DEFAULT_TIMEOUT=100 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONFAULTHANDLER=1 \
    PYTHONHASHSEED=random \
    LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    LITESTAR_APP="${LITESTAR_APP}" \
    ALLOWED_CORS_ORIGINS="https://harryle95.github.io"
WORKDIR /workspace/app
COPY src src/
COPY .creds .creds
RUN pdm install $PDM_INSTALL_ARGS
STOPSIGNAL SIGINT
EXPOSE 8080
CMD [ "make", "deploy"]
VOLUME /workspace/app
