import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Clock: React.FC = () => {

    const [dateTime, setDateTime] = useState<Date>(new Date());

    useEffect( () => {
        const id: NodeJS.Timer  = setInterval( () => setDateTime(new Date()), 1000 );

        return () => {
            clearInterval(id);
        }
    }, []);
   
    return (
        <View>
            <Text style={{fontSize: 60}}>{`${dateTime.toLocaleTimeString()}`}</Text>
        </View>
    );
}

export default Clock;