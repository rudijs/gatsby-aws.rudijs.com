# Configure AWS Resources

These documents, files and commands refer to _gatsby-aws.rudijs.com_ - update and use your domain as required.

## Register a Domain name with Route53

1. Register the domain name. Create a _. wildcard and fqdn (ex: rudijs.com & _.rudijs.com) SSL cert at AWS Certficate Manager
2. [https://medium.com/@victor.leong.17/cheap-wildcard-ssl-certificate-with-aws-route-53-and-certificate-manager-ac922a4af5af](https://medium.com/@victor.leong.17/cheap-wildcard-ssl-certificate-with-aws-route-53-and-certificate-manager-ac922a4af5af)
3. Note: If the URL doesn't work a [screenshot of the blog post](Cheap-Wildcard-SSL-Certificate-with-AWS-Route-53-and-Certificate-Manager.png) is available.

## AWS S3

- Create the AWS S3 bucket
- `aws s3 mb s3://gatsby-aws.rudijs.com`
- Congifure the S3 bucket for static website hosting (use the gatsby generated 404.html page for errors)
- `aws s3 website s3://gatsby-aws.rudijs.com --index-document index.html --error-document 404.html`
- `aws s3api put-bucket-policy --bucket gatsby-aws.rudijs.com --policy file://s3-gatsby-aws.rudijs.com-policy.json`
- Create Cloudfront distribution with https
- `aws cloudfront create-distribution --origin-domain-name gatsby-aws.rudijs.com.s3.amazonaws.com --default-root-object index.html`

## AWS Cloudfront

- Open up the Cloudfront web UI and make manual edits (Manual is quicker and easier for now, but the goal is to use Cloudformation for this).
- General >> Edit:
  1. Alternate Domain Names (CNAMEs): gatsby-aws.rudijs.com
  2. Custom SSL Certificate (example.com): rudijs.com
  3. Save (Yes, Edit)
- Behaviors >> Edit:
  1. Viewer Protocol Policy: Redirect HTTP to HTTPS
  2. Allowed HTTP Methods: (Leave for now, may need to review later)
  3. Save (Yes, Edit)
- Error Pages >> Create Custom Error Response:
  1. HTTP Error Code = 404: Not Found
  2. Customize Error Response = Yes
     - Response Page Path = /404.html
     - HTTP Response Code = 404: Not Found

## DNS Route53

- Create an A record for your domain name and choose an ALIAS record pointing to the **CloudFront distributions** _gatsby-aws.rudijs.com_
- Note: be sure to select the cloudfront distribution and not the **S3 website endpoints** type.

All done, we may have to wait a few minutes for the CloudFront setup to complete.

<a href="https://gatsby-aws.rudijs.com" target="_blank">gatsby-aws.rudijs.com</a>
