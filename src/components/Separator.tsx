import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const StyledView = styled(View);

export const Separator = () => {
    return (
      <StyledView style={styles.container} className="w-full">
      </StyledView>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D3D3D3',
        height: 1
    },
})