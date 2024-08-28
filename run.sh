#!/bin/bash


# Generate content types
npx strapi generate content-type user
npx strapi generate content-type address
npx strapi generate content-type category
npx strapi generate content-type sub-category
npx strapi generate content-type product
npx strapi generate content-type product-attribute
npx strapi generate content-type product-sku
npx strapi generate content-type wishlist
npx strapi generate content-type cart
npx strapi generate content-type cart-item
npx strapi generate content-type order-detail
npx strapi generate content-type order-item
npx strapi generate content-type payment-detail

# Generate relationships
npx strapi generate:relation user addresses
npx strapi generate:relation category sub-categories
npx strapi generate:relation product sub-categories
npx strapi generate:relation product-sku product
npx strapi generate:relation product-sku product-attributes
npx strapi generate:relation wishlist user
npx strapi generate:relation wishlist product
npx strapi generate:relation cart user
npx strapi generate:relation cart-item cart
npx strapi generate:relation cart-item product
npx strapi generate:relation cart-item product-sku
npx strapi generate:relation order-detail user
npx strapi generate:relation order-item order-detail
npx strapi generate:relation order-item product
npx strapi generate:relation order-item product-sku
npx strapi generate:relation payment-detail order-detail

# Start Strapi in development mode
npx strapi develop