import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const Bangladesh = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={25} {...props}>
    <Path fill="#006a4e" d="M0 0h640v480H0z" />
    <Circle cx={20} cy={12} r={8} fill="#f42a41" />
  </Svg>
)

export default Bangladesh;
