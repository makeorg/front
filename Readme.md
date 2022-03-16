# [Deprecated] - Make.org React Front End

This repository has been incorporated in [Monofront](https://gitlab.com/makeorg/platform/monofront).

It was used to version Make.org service front office.\
You can fid the old documentation [here](./Deprecated_Readme.md).
Today this repository is used for the "Place" service.

## How to set a new "Place" front office
- Create a new branch based on [placebymakeorg branch](https://gitlab.com/makeorg/platform/front/-/tree/placebymakeorg).
- Change `CONSULTATION_SLUG` to defined slug in [config.js](https://gitlab.com/makeorg/platform/front/-/tree/placebymakeorg/shared/constants/config.js)
- Commit with message `chore(transverse): (defined slug) slug`.
- Push the new branch.

## Deployment
The "Place" service doesn't have any CD.\
To deploy, get in touch with SRE team or a Tech lead.