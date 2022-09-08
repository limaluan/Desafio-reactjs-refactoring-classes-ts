import { createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { IFoodProps } from "../../pages/Dashboard";
import { FormHandles } from "@unform/core";

export interface IEditingFoodProps {
  id: number;
  image: string;
  name: string;
  price: string;
  description: string;
}

interface IModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: IEditingFoodProps;
  handleUpdateFood: (data: IFoodProps) => void;
}

export function ModalEditFood({
  editingFood,
  handleUpdateFood,
  isOpen,
  setIsOpen,
}: IModalEditFoodProps) {
  const formRef = createRef<FormHandles>();

  const handleSubmit = async (data: IFoodProps) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon={undefined} />

        <Input name="name" placeholder="Ex: Moda Italiana" icon={undefined} />
        <Input name="price" placeholder="Ex: 19.90" icon={undefined} />

        <Input name="description" placeholder="Descrição" icon={undefined} />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
