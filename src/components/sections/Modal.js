import React, { useContext } from "react";
import { Guitards } from "../../context/GuitardsProvider";

const Modals = ({ id }) => {
  const [guitards] = useContext(Guitards);

  const guitard = guitards.list.get.find(item => item._id === id);
  console.log(guitard);

  const closeModal = e => {
    guitards.modal.set(false);
  };

  return (
    <div>
      <div className="modal__container">
        <div className="modal__container--pane">
          <div className="modal__container--header">
            <div className="modal__container--title">
              Guitard: {guitard.name} - {guitard.woods.name} /{" "}
              {guitard.brand.name}
            </div>
            <div className="modal__container--closebutton" onClick={closeModal}>
              <i class="fa fa-times btn__rotate"></i>
            </div>
          </div>
          <div className="modal__container--body"></div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
