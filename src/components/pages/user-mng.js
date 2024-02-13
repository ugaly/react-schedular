import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserManagement from './User-management';

const userMang = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab label="Venue Manage" value="1" />
                        <Tab label="Normal User" value="2" />

                    </TabList>
                </Box>
                <TabPanel value="1"><UserManagement /></TabPanel>
                <TabPanel value="2">
                    Normal User
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default userMang;
