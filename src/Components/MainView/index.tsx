import React, { useState } from 'react';
import { ButtonGroup } from 'baseui/button-group';
import { Button } from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from 'baseui/modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import ContactInfo from '../ContactInfo';
import TagInfo from '../TagInfo';

const MainView = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonGroup onClick={(e, i) => setTab(i)}>
        <Button>Contacts</Button>
        <Button>Tags</Button>
      </ButtonGroup>
      <Button onClick={() => setIsOpen(!isOpen)}>Add</Button>
      <div>{tab === 0 ? <ContactInfo /> : <TagInfo />}</div>
      <Modal
        onClose={() => setIsOpen(false)}
        closeable
        isOpen={isOpen}
        animate
        size={SIZE.default}
        role={ROLE.dialog}
      >
        <ModalHeader>Enter data</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ name: '', email: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                setIsOpen(false);
              }, 1000);
            }}
            render={({ isSubmitting }) => (
              <Form>
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" placeholder="Email" />
                <ModalButton disabled={isSubmitting} type="submit">
                  Add
                </ModalButton>
                <ModalButton
                  disabled={isSubmitting}
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </ModalButton>
              </Form>
            )}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default MainView;
