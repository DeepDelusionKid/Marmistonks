// React stuff/types/hooks
import React, { FC, Fragment, useState } from "react"
// Styles
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

interface ErrorsProps {
    message: string,
    className?: string,
    type?: string
}

const FadeIn = styled.div`animation: 0.5s ${keyframes`${fadeIn}`}`

const Alert:FC<ErrorsProps> = ({ message, className, type }) =>{

    const [Show, setShow] = useState<boolean>(true);

    return(
        <Fragment>
            {Show &&
                <FadeIn>
                    <div className={ className + " border px-3 py-3 rounded relative" } role="alert">
                        {type === 'error' &&
                            <strong className="font-bold">Erreur : </strong>
                        }
                        <span className="block sm:inline pr-8">{ message }</span>
                        <span className="absolute top-0 bottom-0 right-0 px-3 py-3">
                            <svg className={(type === 'error' ? "text-red-500" : "text-green-900") + " fill-current h-6 w-6"} role="button" onClick={() => setShow(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Fermer</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>
                </FadeIn>
            }
        </Fragment>
        
    )
}

export default Alert;
