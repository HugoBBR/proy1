import React, { useState } from 'react';
import { Animated,StyleSheet, Text, View,Button, ActivityIndicator} from 'react-native';
import { createDndContext } from "react-native-easy-dnd";


const { Provider, Droppable, Draggable } = createDndContext();

const GameScreen=props=>{

    return(
<Provider>


<Droppable

>
  {({ active, viewProps }) => {
    return (
      <Animated.View
        {...viewProps}
        style={[
          {
            width: 300,
            height: 200,
            backgroundColor: active
              ? "blue"
              : "green"
          },
          viewProps.style,
        ]}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Drop here</Text>
      </Animated.View>
    );
  }}
</Droppable>

</Provider>
    )
}



export default GameScreen;