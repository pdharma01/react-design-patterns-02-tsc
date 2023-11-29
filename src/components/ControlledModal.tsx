import ButtonEvent from "./basicTypes/ButtonEvent"

type ControlledModalProps = {
    children: React.ReactNode,
    showModal: boolean,
    onRequestClose: ()=>void
}

type ChildrenTypeProps = {
    children: React.ReactNode
}

const ControlledModal = ({ children, showModal, onRequestClose }: ControlledModalProps) => {

    // Modal Sub Components
    const ModalBackground = ({ children }: ChildrenTypeProps): React.ReactNode => {
        return (
            <div
                className="modal-background"
                onClick={onRequestClose}
            >
                Modal Background
                {children}
            </div>
        )
    }

    const ModalBody = ({ children }: ChildrenTypeProps): React.ReactNode=> {
        return (
            <div
                className="modal-body"
            >
                {children}
                </div>
        )
    }


    return (
        <div>
            <h3>Controlled Modal</h3>

            {showModal ? (
                <ModalBackground>
                    <ModalBody>
                        {children}
                        <ButtonEvent
                            handleClick={onRequestClose}
                        >Close Modal</ButtonEvent>
                    </ModalBody>

                </ModalBackground>

            ) : null}



        </div>

    )
}

export default ControlledModal