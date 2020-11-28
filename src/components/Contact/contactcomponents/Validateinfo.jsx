export default function Validateinfo(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Prenom requis';
  } else if (values.name.length <= 2) {
    errors.name = 'Votre Prénom est vraiment court !';
  }

  if (!values.lastname.trim()) {
    errors.lastname = 'Nom requis';
  } else if (values.lastname.length <= 2) {
    errors.lastname = 'Votre Nom est vraiment court !';
  }

  if (!values.email) {
    errors.email = 'Email requis';
  } else if (!/\S+@\S+.\S+/.test(values.email)) {
    errors.email = ' Email invalide';
  }

  return errors;
}
