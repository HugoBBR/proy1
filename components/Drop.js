import React from 'react'
import {Animated} from 'react-native';
import { createDndContext } from "react-native-easy-dnd";

const { Provider, Droppable, Draggable } = createDndContext();





<Draggable
  onDragStart={() => {
    console.log('Started draggging');
  }}
  onDragEnd={() => {
    console.log('Ended draggging');
  }}
  payload="my-draggable-item"
>
  {({ viewProps }) => {
    return (
      <Animated.View
        {...viewProps}
        style={[viewProps.style, { width: 200, height: 200, backgroundColor: "red" }]}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Drag me
        </Text>
      </Animated.View>
    );
  }}
</Draggable>