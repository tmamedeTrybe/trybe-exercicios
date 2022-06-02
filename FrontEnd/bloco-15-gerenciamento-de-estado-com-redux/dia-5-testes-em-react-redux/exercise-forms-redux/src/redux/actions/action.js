export const SUBMIT_PERSONAL_INFO = 'SUBMIT_PERSONAL_INFO';
export const SUBMIT_PROFESSIONAL_INFO = 'SUBMIT_PROFESSIONAL_INFO';

export const submitPersonalInfo = (payload) => ({
  type: SUBMIT_PERSONAL_INFO,
  ...payload,
});

export const submitProfessionalInfo = (payload) => ({
  type: SUBMIT_PROFESSIONAL_INFO,
  ...payload,
});
