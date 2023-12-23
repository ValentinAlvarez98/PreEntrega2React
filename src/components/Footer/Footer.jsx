import { Container, Box, Card, CardMedia, Button, Grid, Typography, useTheme } from '@mui/material';
import { logo, socialMedia, payments } from "../../utils/images.js"
import { Link } from "react-router-dom";
import SVG from './SVG.jsx';

const Footer = () => {

    const theme = useTheme();

    const styledFooter = {

        styledBox: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },

        styledTypography: {
            color: theme.palette.primary.dark,
            fontSize: '0.9rem',
            fontFamily: theme.typography.fontFamily.bold,
        },

        styledCopyrigth: {
            color: theme.palette.secondary.light,
            textAlign: 'center',
            fontSize: '0.75rem',
            marginBottom: '1rem',
            fontFamily: theme.typography.fontFamily.regular,
        },

    }

    return (
        <>
            <SVG viewBox="0 0 1440 320" />
            <Container maxWidth="xxl">
                <Box sx={styledFooter.styledBox}>
                    <Link to="/">
                        <img src={logo[0].imgPath} alt={logo[0].label} />
                    </Link>
                </Box>

                <Box sx={{
                    ...styledFooter.styledBox,
                    mt: 4,
                }}>
                    {socialMedia.map((image, index) => {
                        return (
                            <Card key={index} sx={{
                                margin: '0 0.5rem',
                                borderRadius: '50%'
                            }}>
                                <CardMedia component="img" image={image.imgPath} alt={image.label} sx={{
                                    width: "30px",
                                    height: "30px"
                                }} />
                            </Card>
                        );
                    })}
                </Box>


                <Grid container spacing={1}
                    sx={{
                        ...styledFooter.styledBox,
                        mt: 4,
                    }}
                >
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            ...styledFooter.styledBox,
                            justifyContent: 'end',
                        }}
                    >
                        <Button>
                            <Typography sx={styledFooter.styledTypography}>
                                Nosotros
                            </Typography>

                        </Button>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            ...styledFooter.styledBox,
                            justifyContent: 'end',
                        }}
                    >
                        <Button>
                            <Typography sx={styledFooter.styledTypography}>
                                Cambios y garantias
                            </Typography>
                        </Button>


                    </Grid>
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            ...styledFooter.styledBox,
                            justifyContent: 'start',
                        }}
                    >
                        <Button>
                            <Typography sx={styledFooter.styledTypography}>
                                Terminos y condiciones
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            ...styledFooter.styledBox,
                            justifyContent: 'start',
                        }}
                    >
                        <Button>
                            <Typography sx={styledFooter.styledTypography}>
                                Contacto
                            </Typography>
                        </Button>

                    </Grid>
                </Grid>

                <Box sx={{
                    ...styledFooter.styledBox,
                    mt: 4,
                }}>
                    {payments.map((image, index) => {
                        return (
                            <Card key={index} sx={{
                                margin: '0 1rem'
                            }}>
                                <CardMedia component="img" image={image.imgPath} alt={image.label} sx={{
                                    width: "100px",
                                    height: "50px"
                                }} />
                            </Card>
                        );
                    })}
                </Box>

                <Box sx={{
                    ...styledFooter.styledBox,
                    mt: 4,
                }}>
                    <Typography sx={styledFooter.styledCopyrigth}>
                        © 2023 BunkerPhoneShop - Todos los derechos reservados
                    </Typography>
                </Box>
            </Container>


        </>
    )
}

export default Footer;