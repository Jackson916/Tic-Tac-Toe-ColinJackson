#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}"  \
  --header "Content-type: application/json" \
  --data `{
    "game": {
        "cell": {
        "index": "'"${INDEX}"'",
         "value": "'"${VALUE}"'"
    },
     "over": "'"${OVER}"'"
  }
}`


echo