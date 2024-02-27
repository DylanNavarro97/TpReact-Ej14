import { Button } from "react-bootstrap";

const ItemReceta = () => {
  return (
    <tr>
      <td className="text-center"></td>
      <td></td>
      <td className="text-end"></td>
      <td className="text-center">
        <img src="" alt="" />
      </td>
      <td></td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2"></Button>
        <Button variant="danger"></Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
