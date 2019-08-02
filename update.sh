#!/bin/bash

commit_msg=Update

if [[ -z "$1" ]]
then
    echo "usage ./update.sh <commit message>"
    echo "Taking default commit message: \"Update\""
else
    commit_msg=$1
fi

echo -e "Formatting before adding\n"
yarn pretty-quick

echo -e "Adding files:\n"
git add --all

echo -e "Committing changes.\n"

git commit -m "${commit_msg}"

echo -e "Pushing repo.\n"

branch_name=$(git branch | grep \* | cut -d ' ' -f2)
git push origin "${branch_name}"

yarn deploy

rm -rf build
