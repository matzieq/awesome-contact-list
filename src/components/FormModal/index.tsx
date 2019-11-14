import React, { useContext, useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";

import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
// import { PhoneInput } from "baseui/phone-input";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Context } from "../StateProvider";
import TextInput from "./TextInput";
import { Button } from "baseui/button";
import { Select, Value } from "baseui/select";

export default function() {
  const {
    modalOpen,
    setModalOpen,
    contacts,
    setContacts,
    tags,
    setTags,
    editedItemId,
    isEditing
  } = useContext(Context);
  let location = useLocation();

  const formType = location.pathname === "/contacts" ? 0 : 1;

  const searchedItems = formType === 0 ? contacts : tags;

  const editedItem = searchedItems.find(
    (item: any) => item.id === editedItemId
  );

  const [skills, setSkills] = useState<Value>([]);

  useEffect(() => {
    editedItem &&
      setSkills(
        editedItem.skills.map((skill: any) =>
          tags.find((tag: any) => tag.id === skill)
        )
      );
    console.log(skills);
  }, [editedItemId]);

  const generateId = (items: any) => {
    if (!items.length) {
      return "1";
    }

    return (
      Math.max(...items.map((item: any) => parseInt(item.id))) + 1
    ).toString();
  };

  let initialValues: any;

  if (formType === 0) {
    initialValues = isEditing
      ? {
          ...editedItem
        }
      : {
          name: "",
          email: "",
          phone: "",
          company: "",
          department: "",
          skills: []
        };
  } else {
    initialValues = isEditing ? { tagName: editedItem.name } : { tagName: "" };
  }

  const submitContact = (values: any) => {
    console.log(values);
    const newContact = {
      ...values,
      dateAdded: isEditing
        ? editedItem.dateAdded
        : dayjs().format("YYYY-MM-DD"),
      id: isEditing ? editedItemId : generateId(contacts),
      skills: isEditing ? skills.map(skill => skill.id) : []
    };

    let editedContacts: any;

    if (isEditing) {
      editedContacts = [...contacts];
      editedContacts[editedContacts.indexOf(editedItem)] = newContact;
    } else {
      editedContacts = [...contacts, newContact];
    }
    setContacts(editedContacts);
  };

  const submitTag = (values: any) => {
    const newTag = {
      id: isEditing ? editedItemId : generateId(tags),
      name: values.tagName
    };
    let editedTags: any;
    if (isEditing) {
      editedTags = [...tags];
      editedTags[editedTags.indexOf(editedItem)] = newTag;
    } else {
      editedTags = [...tags, newTag];
    }
    setTags(editedTags);
  };

  const onSubmit = (values: any, actions: any) => {
    if (formType === 1) {
      submitTag(values);
    } else {
      submitContact(values);
    }

    actions.setSubmitting(false);
    setModalOpen(false);
  };

  return (
    <Modal
      onClose={() => setModalOpen(false)}
      closeable
      isOpen={modalOpen}
      animate
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>Enter data</ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ isSubmitting, setFieldValue }) => (
            <Form>
              {formType === 0 ? (
                <>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    component={TextInput}
                  />
                  <ErrorMessage name="name" component="div" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    component={TextInput}
                  />
                  <Field
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    component={TextInput}
                  />
                  <Field
                    type="text"
                    name="company"
                    placeholder="Company"
                    component={TextInput}
                  />
                  <Field
                    type="text"
                    name="department"
                    placeholder="Department"
                    component={TextInput}
                  />
                  <Select
                    creatable
                    multi
                    options={tags}
                    labelKey="name"
                    valueKey="id"
                    onChange={e => {
                      setSkills(e.value);
                    }}
                    value={skills}
                  />
                </>
              ) : (
                <Field
                  type="text"
                  name="tagName"
                  placeholder="Enter skill"
                  component={TextInput}
                />
              )}

              <ModalButton disabled={isSubmitting} type="submit">
                {isEditing ? "Save" : "Add"}
              </ModalButton>
              <ModalButton
                disabled={isSubmitting}
                type="button"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </ModalButton>
            </Form>
          )}
        />
      </ModalBody>
    </Modal>
  );
}
