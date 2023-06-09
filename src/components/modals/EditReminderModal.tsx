import { Fragment, FC } from "react";
import { Formik, Form, Field } from "formik";
import { format, parse, parseISO } from "date-fns";
import { Modal } from "react-bulma-components";
import { object as yupObject, string as yupString, date as yupDate } from "yup";

// TOAST
import { toast } from 'material-react-toastify';

// ICONS
import { ServerStackIcon } from "@heroicons/react/24/outline";

// STORE
import { useAppSelector, useAppDispatch } from "@/store";
import { IEvent, IEventPayload, updateEvent } from '@/store/slices/event';

// COMPONENTS
import { OutlinedButton } from "@/components/core";
import { TextField, TextArea } from "@/components/forms";
import { ErrorMsg } from "@/components/errors";

import { IComponent } from '@/interfaces';

const initialFormState = (eventPayload: IEvent) => ({
  id: eventPayload.id,
  title: eventPayload.title,
  date: format(parseISO(eventPayload.date), 'yyyy-MM-dd'),
  startTime: eventPayload.startTime,
  endTime: eventPayload.endTime,
  city: eventPayload.city,
  description: eventPayload.description,
});

const formSchema = yupObject().shape({
  title: yupString().required("Title is required!"),
  date: yupDate().required('Date is required!'),
  startTime: yupString().required("Start time is required!"),
  endTime: yupString().required("End time is required!"),
  city: yupString().required("City is required!"),
  description: yupString()
    .max(30, "Description must be less than 30 characters!")
    .min(10, "Description must be more than 10 characters!")
    .required("Description is Required!"),
});

const EditReminderModal: FC<IComponent.IEditReminderModalProps> = ({
  isVisible,
  eventPayload,
  onCloseModal,
}) => {
  const dispatch = useAppDispatch();

  const { events } = useAppSelector((state) => state.event);

  const editEvent = (values: IEvent) => {
    const payload: IEvent = values;

    let updatedEvents = [...events];

    const EIdx = updatedEvents.findIndex((updatedEvent) => updatedEvent.id === payload.id);

    if (EIdx === -1) return;

    updatedEvents[EIdx] = payload;

    dispatch(updateEvent(updatedEvents));

    toast.success('Reminder updated successfully!');
  }

  return (
    <Fragment>
      <Formik
        initialValues={initialFormState(eventPayload)}
        validationSchema={formSchema}
        onSubmit={(values, helpers) => {
          let newValues = {
            ...values,
            date: new Date(values.date).toISOString()
          };

          editEvent(newValues);

          helpers.resetForm();

          setTimeout(() => {
            onCloseModal();
          }, 0);
        }}
      >
        {(props) => (
          <Modal show={isVisible} closeOnBlur={false} onClose={onCloseModal}>
            <Form>
              <Modal.Card>
                <Modal.Card.Header>
                  <Modal.Card.Title>Edit Reminder</Modal.Card.Title>
                </Modal.Card.Header>

                <Modal.Card.Body>
                  <div className="is-family-secondary has-text-weight-semibold is-size-4 mb-4">
                    Selected Date:{" "}
                    {format(parse(props.values.date, 'yyyy-MM-dd', new Date()), 'd MMMM, yyyy')}
                  </div>

                  <div className="mb-4">
                    <label className="form__label mb-2">Title</label>
                    <Field
                      name={"title"}
                      as={TextField}
                      type={"text"}
                      placeholder={"Standup Time"}
                    />
                    <ErrorMsg name={"title"} />
                  </div>

                  <div className="mb-4">
                    <label className="form__label mb-2">Date</label>
                    <Field
                      name={"date"}
                      as={TextField}
                      type={"date"}
                      placeholder={"Select Date"}
                    />
                    <ErrorMsg name={"date"} />
                  </div>

                  <div className="mb-4">
                    <label className="form__label mb-2">Start Time</label>
                    <Field
                      name={"startTime"}
                      as={TextField}
                      type={"time"}
                      placeholder={"Select Start Time"}
                    />
                    <ErrorMsg name={"startTime"} />
                  </div>

                  <div className="mb-4">
                    <label className="form__label mb-2">End Time</label>
                    <Field
                      name={"endTime"}
                      as={TextField}
                      type={"time"}
                      placeholder={"Select End Time"}
                    />
                    <ErrorMsg name={"endTime"} />
                  </div>

                  <div className="mb-4">
                    <label className="form__label mb-2">City</label>
                    <Field
                      name={"city"}
                      as={TextField}
                      type={"text"}
                      placeholder={"Event City"}
                    />
                    <ErrorMsg name={"city"} />
                  </div>

                  <div className="mb-4">
                    <label className="form__label mb-2">Description</label>
                    <Field
                      name={"description"}
                      as={TextArea}
                      type={"text"}
                      placeholder={"Progress follow up..."}
                    />
                    <ErrorMsg name={"description"} />
                  </div>
                </Modal.Card.Body>

                <Modal.Card.Footer className="is-flex is-flex-direction-row is-justify-content-flex-end is-align-items-center py-4">
                  <OutlinedButton
                    type="submit"
                    copy={"Save"}
                    className="m-4"
                    colorVariant={"primary"}
                    prependChildren={
                      <ServerStackIcon className=" h--24 w--24" />
                    }
                  />

                  <OutlinedButton copy={"Cancel"} onClick={onCloseModal} />
                </Modal.Card.Footer>
              </Modal.Card>
            </Form>
          </Modal>
        )}
      </Formik>
    </Fragment>
  );
};

export { EditReminderModal as default };
