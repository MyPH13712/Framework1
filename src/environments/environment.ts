const apiUrl = 'http://localhost:8000/api'

export const environment = {
  production: false,

  products: `${apiUrl}/products`,
  productss: `${apiUrl}/products/filter`,
  login: `${apiUrl}/login`,
  category: `${apiUrl}/category`,
  signup: `${apiUrl}/signup`,
  users: `${apiUrl}/users`
};

