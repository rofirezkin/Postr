import {View} from 'react-native';
import React, {ReactNode} from 'react';
interface PaddingProps {
  children: ReactNode;
  flexDirection?: boolean;
  justifyContent?: string;
}

const Padding = ({children, flexDirection, justifyContent}: PaddingProps) => {
  const stylePadding: any = {
    padding: 15,
    justifyContent: justifyContent && justifyContent,
    flexDirection: flexDirection && 'row',
  };
  return <View style={stylePadding}>{children}</View>;
};

export default Padding;
