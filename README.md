# gatsby-aws.rudijs.com

A gatsbyjs static site running from an AWS S3 bucket and AWS Cloudfront mapped with a https:// domain name.

## Requirements

- git
- aws cli
- GatsbyJS
- jq (lightweight and flexible command-line JSON processor - used during deployment)

## Install

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- `sudo apt install jq`
- `npm install -g gatsby-cli`
- `git clone git@github.com:rudijs/gatsby-aws.rudijs.com.git`
- `cd gatsby-aws.rudijs.com`

## Create new static site (if starting over)

- `gatsby new website https://github.com/gatsbyjs/gatsby-starter-hello-world`
- `cd website`
- copy in the `webiste/deploy.sh` script from this repo
- `npm run develop`
- `open http://localhost:8000`

## Development

- `cd website`
- `npm run develop`

## Deployment

First setup your [AWS resources if you haven't already](docs/aws-setup.md) (S3, CloudFront, TLS Certificate, Route53 DNS)

1. Build the static site
2. Sync code to S3 bucket
3. Flush (invalidate) the CloudFront distribution cache
4. `./deploy.sh`
