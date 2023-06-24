import AddressInterface from "../../../cards/models/interfaces/AddressInterface";
import ImageInterface from "./ImageInterface";
import NameInterface from "./NameInterface";

interface UserInterface {
  _id: string;
  name: NameInterface;
  phone: string;
  email: string;
  password: string;
  image: ImageInterface;
  address: AddressInterface;
  isBusiness: boolean;
  isAdmin: boolean;
}
export default UserInterface;
