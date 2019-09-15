require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

export const uriBankApi = process.env.URI_BANK_API
export const openUriBankApi = `${uriBankApi}/oapi`
export const authUriBankApi = `${uriBankApi}/api`