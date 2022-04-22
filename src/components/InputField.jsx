import React from "react";

const InputField = ({
	name,
	type,
	label,
	mandatory,
	register,
	errors,
	message,
	otherValidation,
}) => {
	return (
		<div className="w-100 position-relative inp_container">
			<label htmlFor={name}>
				{label}{" "}
				{(mandatory && <span className="text-danger">*</span>) || (
					<span>(optional)</span>
				)}
			</label>
			<br />
			{(name === "message" && (
				<textarea
					style={{ border: errors[name] && "3px solid #f70000" }}
					className="w-100"
					rows="3"
					{...register(name, {
						required: {
							value: mandatory,
							message: message && message[0],
						},
						...otherValidation,
					})}
				></textarea>
			)) || (
				<input
					style={{ border: errors[name] && "3px solid #f70000" }}
					className="w-100"
					type={type}
					id={name}
					{...register(name, {
						required: {
							value: mandatory,
							message: message && message[0],
						},
						...otherValidation,
					})}
				/>
			)}

			{errors[name] && (
				<span className="errorMessage">{errors[name].message}</span>
			)}
		</div>
	);
};

export default InputField;
