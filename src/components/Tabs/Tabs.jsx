import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Grid, Tabs, Tab, Box, useTheme } from '@mui/material';
import Item from '../ItemListContainer/Item/Item.jsx';

function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


const BasicTabs = ({ products }) => {

    const theme = useTheme();

    const styledTabs = {

        fontFamily: theme.typography.fontFamily.bold,
        fontSize: theme.typography.fontSize.md,

    }

    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('cellphones');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setCategory(categories[newValue]);
    };

    const tabs = [{ label: 'Celulares' }, { label: 'Auriculares' }, { label: 'Cargadores' }, { label: 'Protectores' },];

    const categories = ['cellphones', 'headphones', 'cargadores', 'protectores'];

    const filteredProducts = products.filter((product) => product.category === category);

    return (
        <>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
                marginTop: '2.5rem',
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    {tabs.map((tab, index) => (
                        <Tab key={index} sx={styledTabs} label={tab.label} />
                    ))}
                </Tabs>
            </Box>

            {Array.from({
                length: tabs.length
            },
                (_, index) => (
                    <TabPanel
                        value={value}
                        index={index}
                        sx={{ marginTop: '0' }}
                        key={index}>

                        <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                            {filteredProducts.map((product) => (

                                <Item product={product} key={product.id} />
                            ))}
                        </Grid>
                    </TabPanel >
                ))}

        </>
    );
};

export default BasicTabs;
