"use client";
import React, { useState } from "react";
import { FileInput, Label, Button, Card } from "flowbite-react";

const ProductForm = () => {
  const [productData, setProductData] = useState({
    nombre: "",
    imagen_url: "",
    descripcion: "",
    precio: "",
    categoria_id: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdProduct = await createProduct(productData);
      console.log("Producto creado con éxito:", createdProduct);

    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProductData({ ...productData, imagen_url: imageUrl });
    }
  };

  return (
    <Card className="max-w-5xl p-5">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Crear Producto
      </h2>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="nombre" value="Nombre del Producto" />
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleChange}
          className="form-input mb-4"
          required
        />

        <div className="mb-4">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <FileInput id="dropzone-file" className="hidden" onChange={handleFileChange} />
          </Label>
        </div>

        <Label htmlFor="descripcion" value="Descripción" />
        <textarea
          id="descripcion"
          name="descripcion"
          onChange={handleChange}
          className="form-input mb-4"
          required
        />

        <Label htmlFor="precio" value="Precio" />
        <input
          type="number"
          id="precio"
          name="precio"
          onChange={handleChange}
          className="form-input mb-4"
          required
        />

        <Label htmlFor="categoria_id" value="ID de la Categoría" />
        <input
          type="text"
          id="categoria_id"
          name="categoria_id"
          onChange={handleChange}
          className="form-input mb-4"
          required
        />

        <Label htmlFor="stock" value="Stock" />
        <input
          type="number"
          id="stock"
          name="stock"
          onChange={handleChange}
          className="form-input mb-4"
          required
        />

        <Button type="submit" className="w-full">
          Crear Producto
        </Button>
      </form>
    </Card>
  );
};

export default ProductForm;
