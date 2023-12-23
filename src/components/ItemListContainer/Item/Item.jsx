import { Grid, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import FlipperImg from "../../FlipperImg/FlipperImg";

const Item = ({ product }) => {

    const theme = useTheme();

    const styledItem = {


        styledTitle: {
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: theme.typography.fontSize.md,
            marginBottom: '1rem',
            height: '40px',
            fontFamily: theme.typography.fontFamily.bold,
        },

        styledPrice: {
            color: theme.palette.info.light,
            textAlign: 'center',
            fontSize: theme.typography.fontSize.lg,
            marginBottom: '1rem',
            fontFamily: theme.typography.fontFamily.bold,
        },

        styledButton: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            width: '200px',
            height: "30px",
            borderRadius: '0.1rem',
            marginTop: '1rem',
            fontSize: theme.typography.fontSize.sm,
            fontFamily: theme.typography.fontFamily.semiBold,
        }

    }

    return (

        <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>

            <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'}>

                <Link to={`/${product.category}/${product._id}`}
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <Grid item xs={12} sm={12} md={12} lg={12}>

                        <FlipperImg product={product} size={300} />

                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>

                        <Typography sx={styledItem.styledTitle}>
                            {product.title}
                        </Typography>

                    </Grid>

                </Link>

                <Grid item xs={12} sm={12} md={12} lg={12}>

                    <Typography
                        className="regular"
                        variant="body2"
                        sx={styledItem.styledPrice}
                    >
                        USD {product.price.toFixed(2)}
                    </Typography>

                </Grid>

                <Button
                    className='semiBold'
                    variant="contained"
                    sx={styledItem.styledButton}>
                    Agregar al carrito
                </Button>

            </Grid>

        </Grid>

    )
}

export default Item;