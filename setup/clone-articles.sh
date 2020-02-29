#!/bin/bash

declare -r ARTICLES_DIR='content/blog';

set -x

if [[ ! -d ${ARTICLES_DIR} ]]; then

  err() {
    echo "$@" >&2
  }

  if [[ ! $ARTICLES_REPOSITORY ]]; then
    err "ARTICLES_REPOSITORY of environment variable does not exist.";
    exit 1
  fi

  declare -r repository="${GIT_HOST:-https://github.com}/${ARTICLES_REPOSITORY}.git";

  timeout ${CLONE_TIMEOUT:-900} \
    git clone \
      -v  --depth 1 --single-branch --no-tags \
      ${repository} ${ARTICLES_DIR};

  declare -r clone_result=$(echo $?);

  if [[ ${clone_result} -ne 0 ]]; then
    if [[ ${clone_result} -eq 124 ]]; then
      err "Timeout.";
    fi;

    err "Git clone failed." \
        "Exit-status is ${clone_result}." \
        "Repository is ${repository}.";
    exit 1
  fi;

  cd ${ARTICLES_DIR};
  git submodule update --init --depth 1 --recursive;
fi
