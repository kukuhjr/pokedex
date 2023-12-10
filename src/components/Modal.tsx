import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from './Button'
import CloseIcon from '../assets/icons/CloseIcon'

type ModalProps = {
    title: string,
    isOpen: boolean,
    closeModal: any,
    modalBody: React.ReactNode
}

const Modal = ({ title, isOpen, closeModal, modalBody }: ModalProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/70" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className='flex justify-between items-center'>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-900"
                                    >
                                        { title }
                                    </Dialog.Title>

                                    <Button
                                        icon={<CloseIcon height='20' width='20' />}
                                        onClick={closeModal}
                                        className='icon-button-text hover:bg-black/5'
                                    />
                                </div>

                                { modalBody }
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal