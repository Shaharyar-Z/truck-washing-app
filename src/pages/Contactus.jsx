import React from "react";
import emailjs from "@emailjs/browser";
import { generateEmailTemplate } from "../emailTemplate";
import Modal from "react-bootstrap/Modal";
const Contactus = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    serviceType: "",
    otherService: "",
    jobLocation: "",
    jobCompletedOn: "",
    jobCompletedBy: "",
    jobCompletedBetweenStart: "",
    jobCompletedBetweenEnd: "",
    preferredTime: "",
    serviceFrequency: "",
    additionalNotes: "",
    termsAcknowledged: false,
  });

  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("zaPKYu_jPuOzhv4yC");

  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.emailAddress)
      newErrors.emailAddress = "Email address is required";
    if (!formData.serviceType)
      newErrors.serviceType = "Service type is required";
    if (!formData.jobLocation)
      newErrors.jobLocation = "Job location is required";
    if (!formData.serviceFrequency)
      newErrors.serviceFrequency = "Service frequency is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.emailAddress && !emailRegex.test(formData.emailAddress)) {
      newErrors.emailAddress = "Invalid email format";
    }

    // Phone number validation (Australian format)
    const phoneRegex = /^(\+61|0)[2-478](?:[ -]?[0-9]){8}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid Australian phone number";
    }

    // Other service validation
    if (formData.serviceType === "Other" && !formData.otherService) {
      newErrors.otherService = "Please specify other service";
    }

    // Terms acknowledgment
    if (!formData.termsAcknowledged) {
      newErrors.termsAcknowledged = "You must acknowledge the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? e.target.checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Generate email template
        const emailHtml = generateEmailTemplate(formData);

        // Send email using EmailJS
        const result = await emailjs.send(
          "service_ixvf77v", // Replace with your EmailJS service ID
          "template_926n30u", // Replace with your EmailJS template ID
          {
            to_email: "registershaharyar@gmail.com",
            from_name: formData.emailAddress,
            to_name: formData.fullName,
            html_content: emailHtml,
            ...formData, // Send all form data as template variables
          }
        );

        if (result.status === 200) {
          setSubmitStatus({
            type: "success",
            Heading: "Thank you!",
            message: "Your service request has been submitted successfully.",
          });
          setModalShow(true);
          // Reset form
          setFormData({
            fullName: "",
            companyName: "",
            phoneNumber: "",
            emailAddress: "",
            serviceType: "",
            otherService: "",
            jobLocation: "",
            jobCompletedOn: "",
            jobCompletedBy: "",
            jobCompletedBetweenStart: "",
            jobCompletedBetweenEnd: "",
            preferredTime: "",
            serviceFrequency: "",
            additionalNotes: "",
            termsAcknowledged: false,
          });
        }
      } catch (error) {
        setSubmitStatus({
          type: "error",
          Heading: "Something went wrong!",
          message:
            "There was an error submitting your request. Please try again.",
        });
        setModalShow(true);
      } finally {
        setIsSubmitting(true);
      }
      // Handle form submission here
    }
  };
  return (
    <>
      <div id="About" className="section contact">
        <img
          src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa6794a_shape_02.svg"
          loading="lazy"
          alt="backImage"
          className="shape _02"
        />
        <div className="content">
          <div className="w-layout-grid _2-column-grid">
            <div className="text-box _800px">
              <div className="text-subtitle green">request for submission</div>
              <h2 className="heading h2">Let us know your needs!</h2>
              <p className="paragraph">
                You will be supported within 24 hours of your request at the
                latest, then we will set up an appointment to evaluate your
                work!
              </p>
              <div className="form-block w-form">
                <form
                  data-name="Email Form"
                  name="email-form"
                  id="email-form"
                  method="post"
                  aria-label="Email Form"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <h2>Contact Information</h2>
                    <div className="field-block">
                      <label for="fullName" className="field-label">
                        Name
                      </label>
                      <input
                        className="text-input w-input"
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && (
                        <span className="error-message">{errors.fullName}</span>
                      )}
                    </div>
                    <div className="field-block">
                      <label for="companyName" className="field-label">
                        Company Name (if applicable):
                      </label>
                      <input
                        className="text-input w-input"
                        type="text"
                        name="companyName"
                        placeholder="Company Name (if applicable)"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field-block">
                      <label for="emailAddress" className="field-label">
                        E-mail
                      </label>
                      <input
                        className="text-input w-input"
                        type="email"
                        name="emailAddress"
                        placeholder="Email Address"
                        value={formData.emailAddress}
                        onChange={handleChange}
                      />
                      {errors.emailAddress && (
                        <span className="error-message">
                          {errors.emailAddress}
                        </span>
                      )}
                    </div>
                    <div className="field-block">
                      <label for="phoneNumber" className="field-label">
                        Phone
                      </label>
                      <input
                        className="text-input w-input"
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                      {errors.phoneNumber && (
                        <span className="error-message">
                          {errors.phoneNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h2>Service Details</h2>
                    <div className="field-block">
                      <label for="serviceType" className="field-label">
                        Services
                      </label>

                      <select
                        className="form-dropdown w-select"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        id="Category"
                      >
                        <option value="">Select Service Type</option>
                        <option value="Mining">
                          Mining & Heavy Equipment Cleaning
                        </option>
                        <option value="Truck">Truck & Fleet Washing</option>
                        <option value="Commercial">
                          Commercial & Industrial Pressure Washing
                        </option>
                        <option value="Graffiti">Graffiti Removal</option>
                        <option value="Concrete">
                          Concrete, Driveway & Surface Cleaning and Sealing
                        </option>
                        <option value="Sterilisation">
                          Sterilisation & Heated Deep Cleaning
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.serviceType && (
                        <span className="error-message">
                          {errors.serviceType}
                        </span>
                      )}

                      {formData.serviceType === "Other" && (
                        <input
                          className="text-input w-input"
                          type="text"
                          name="otherService"
                          placeholder="Please specify other service"
                          value={formData.otherService}
                          onChange={handleChange}
                        />
                      )}
                      {errors.otherService && (
                        <span className="error-message">
                          {errors.otherService}
                        </span>
                      )}
                    </div>
                    <div className="field-block">
                      <label for="jobLocation" className="field-label">
                        Location
                      </label>

                      <input
                        className="text-input w-input"
                        type="text"
                        name="jobLocation"
                        placeholder="Job Location"
                        value={formData.jobLocation}
                        onChange={handleChange}
                      />
                      {errors.jobLocation && (
                        <span className="error-message">
                          {errors.jobLocation}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h2>Preferred Service Date</h2>
                    <div className="field-block">
                      <input
                        className="text-input w-input"
                        type="date"
                        name="jobCompletedOn"
                        value={formData.jobCompletedOn}
                        onChange={handleChange}
                      />

                      <input
                        className="text-input w-input"
                        type="text"
                        name="jobCompletedBy"
                        placeholder="Job Completed By"
                        value={formData.jobCompletedBy}
                        onChange={handleChange}
                      />

                      <input
                        className="text-input w-input"
                        type="time"
                        name="jobCompletedBetweenStart"
                        value={formData.jobCompletedBetweenStart}
                        onChange={handleChange}
                      />
                      <input
                        className="text-input w-input"
                        type="time"
                        name="jobCompletedBetweenEnd"
                        value={formData.jobCompletedBetweenEnd}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <h2>Service Frequency</h2>
                    <div className="field-block">
                      <label for="serviceFrequency" className="field-label">
                        Services
                      </label>

                      <select
                        name="serviceFrequency"
                        value={formData.serviceFrequency}
                        onChange={handleChange}
                        className="form-dropdown w-select"
                      >
                        <option value="">Select Frequency</option>
                        <option value="OneTime">One-Time Cleaning</option>
                        <option value="Regular">
                          Regular Maintenance (Weekly, Monthly, etc.)
                        </option>
                      </select>
                      {errors.serviceFrequency && (
                        <span className="error-message">
                          {errors.serviceFrequency}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="field-block">
                    <label for="additionalNotes" className="field-label">
                      Additional Notes & Preferences
                    </label>
                    <textarea
                      className="text-input form w-input"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Additional Notes & Preferences"
                    />
                  </div>
                  <div className="field-block">
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="termsAcknowledged"
                          checked={formData.termsAcknowledged}
                          onChange={handleChange}
                        />
                        I acknowledge that quotes are based on the information
                        provided and may be subject to adjustments up.
                      </label>
                      {errors.termsAcknowledged && (
                        <span className="error-message">
                          {errors.termsAcknowledged}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="spacer _24"></div>
                  <input
                    type="submit"
                    data-wait="Un instant..."
                    className="secundary-button w-button"
                    value="Send"
                  />
                </form>

                <div
                  className="form-success w-form-done"
                  tabindex="-1"
                  role="region"
                  aria-label="Email Form success"
                >
                  <div className="success-text">
                    Your message has been sent. We will get back to you as soon
                    as possible.
                  </div>
                </div>
                <div
                  className="form-error w-form-fail"
                  tabindex="-1"
                  role="region"
                  aria-label="Email Form Failure"
                >
                  <div className="error-text">
                    An error occurred while sending your message. Please try
                    again.
                  </div>
                </div>
              </div>
            </div>
            <div className="block-image">
              <img
                src="/images/cleaning.jpg"
                loading="lazy"
                alt="members of a team"
              />
              <div
                data-w-id="2664a217-5423-eae1-1e5a-d54e861020bc"
                className="image-animation-trigger"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <div className="contact-info-block">
            <div className="contact-info">
              <img
                src="https://cdn.prod.website-files.com/64668e05ceb4d8ba0fa6789d/64668e05ceb4d8ba0fa67944_icons8-ringer-volume.svg"
                loading="lazy"
                alt="back"
                className="icon"
              />
              <div className="spacer _24"></div>
              <h3 className="heading h5 white">Call us!</h3>
              <p className="paragraph white">
                For any questions regarding our services or in case of urgent
                need, please contact us at the number <br />
                below!
              </p>
              <a href="tel:581-985-1074" className="contact-detail">
                581-985-1074
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "#e0a423" }}
          >
            {submitStatus && submitStatus.Heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{submitStatus && submitStatus.message}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Contactus;
