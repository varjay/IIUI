git checkout master
git merge dev

#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # build
  VERSION=$VERSION npm run build:lib

  # publish ii-css
  echo "Releasing ii-css $VERSION ..."
  cd packages/ii-css
  npm version $VERSION
  npm publish
  cd ../..

  # commit
  npm version $VERSION --no-git-tag-version
  git tag v$VERSION
  git commit -am "[release] $VERSION"

  # publish
  git push origin master
  git push origin refs/tags/v$VERSION
  git checkout dev
  git rebase master
  git push origin dev

  npm publish
fi
