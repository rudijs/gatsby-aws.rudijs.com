#!/usr/bin/env bash


export DOMAIN_NAME=gatsby-aws.rudijs.com

echo "==> Building ${DOMAIN_NAME}"

pushd website

npm run build

popd

echo "==> Deploying to AWS S3 ${DOMAIN_NAME}"

aws s3 sync --delete website/public/ s3://${DOMAIN_NAME}

export CLOUDFRONT_DISTRIBUTION_ID=$(aws cloudfront list-distributions | jq -r ".DistributionList.Items[] | select(.Aliases.Items[0] | match(\"^${DOMAIN_NAME}\$\")) | .Id")

echo "==> Cloudfront cache invalidation for ${DOMAIN_NAME} distribution ID $CLOUDFRONT_DISTRIBUTION_ID"

aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths '/*'
