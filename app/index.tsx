import { Text, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
     
      className="flex-1 justify-center  items-center"
    >
      <Text  className="text-blue-600 text-5xl" >Nyotah </Text>
<Link href={'/login'} className="text-green-500 cursor-pointer"> login</Link>
     
    </View>
  );
}
