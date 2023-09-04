import camelcaseKeys from 'camelcase-keys';

export function loginSerializer(response) {
  const { data, included } = camelcaseKeys(response, { deep: true });

  const serializedData = {
    credentials: {
      token: data.attributes.token,
      expiresAt: data.attributes.expiresAt,
    },
    user: {
      id: data.attributes.userId,
      email: included[0].attributes.email,
      name: included[0].attributes.name,
      phoneNumber: included[0].attributes.phoneNumber,
      configuration: included[0].attributes.configuration,
    },
    raw: response,
  };

  return serializedData;
}
