import { IProduct } from '@/interfaces'
import { Grid, Card, CardActionArea, CardMedia } from '@mui/material'
import React, { FC } from 'react'

interface Props {
    product: IProduct;
}
const ProductCard:FC <Props> = ({product}) => {
  return (
    <Grid item xs={6} sm={4} key={product.slug}>
        <Card>
        <CardActionArea>
            <CardMedia component={'img'} image={`src/public/products/${product.images}`} alt={product.title}/>
        </CardActionArea>
        </Card>
    </Grid>
  )
}

export default ProductCard
