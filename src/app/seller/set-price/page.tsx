// "use client";
import React from "react";

export default function page() {
  return <div></div>;
}

// export interface IProductForSeller extends IProduct {
//   price: number;
//   count: number;
//   discount: number;
//   // sellerId: string;
// }
// import { useEffect, useState } from "react";
// import {
//   getSellerProducts,
//   updateSellerProduct,
// } from "@/api/seller-api/getProducts";
// import { IProduct } from "@/api/server-api/type";

// export default function MyProductsPage() {
//   const [products, setProducts] = useState<IProductForSeller[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editProduct, setEditProduct] = useState<IProductForSeller | null>(
//     null
//   );

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await getSellerProducts();
//         const productsForSeller = response.results.map((product) => ({
//           ...product,
//           price: 0,
//           count: 0,
//           sellerId: "",
//           discount: 0,
//         }));
//         setProducts(productsForSeller);
//       } catch (err) {
//         setError("خطا در دریافت محصولات");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>در حال دریافت محصولات...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   const saveChanges = async () => {
//     if (!editProduct) return;

//     try {
//       await updateSellerProduct(editProduct.id, {
//         price: editProduct.price || 0,
//         count: editProduct.count || 0,
//         discount: editProduct.discount || 0,
//       });

//       setProducts((prev) =>
//         prev.map((p) => (p.id === editProduct.id ? editProduct : p))
//       );

//       setEditProduct(null);
//     } catch (error) {
//       console.error("❌ خطا در بروزرسانی:", error);
//       alert("خطایی رخ داد، لطفاً دوباره تلاش کنید.");
//     }
//   };
//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-4">محصولات من</h1>
//       <ul className="space-y-4">
//         {products.map((product) => (
//           <li
//             key={product.id}
//             className="p-4 border rounded-lg flex justify-between"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">{product.titleFa}</h2>
//               <p>
//                 قیمت:{" "}
//                 {product.price
//                   ? `${product.price.toLocaleString()} تومان`
//                   : "ثبت نشده"}
//               </p>
//               <p>تعداد: {product.count ?? "ثبت نشده"}</p>
//             </div>
//             <button
//               className="bg-green-500 text-white px-4 py-2"
//               onClick={() => setEditProduct(product)}
//             >
//               ویرایش
//             </button>
//           </li>
//         ))}
//       </ul>
//       {editProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-lg font-bold mb-4">
//               ویرایش {editProduct.titleFa}
//             </h2>

//             <label className="block mb-2">قیمت جدید:</label>
//             <input
//               type="number"
//               placeholder="قیمت جدید"
//               value={editProduct.price || ""}
//               onChange={(e) =>
//                 setEditProduct({
//                   ...editProduct,
//                   price: Number(e.target.value),
//                 })
//               }
//               className="border p-2 w-full mb-2"
//             />

//             {/* فیلد تعداد */}
//             <label className="block mb-2">تعداد جدید:</label>
//             <input
//               type="number"
//               placeholder="تعداد جدید"
//               value={editProduct.count || ""}
//               onChange={(e) =>
//                 setEditProduct({
//                   ...editProduct,
//                   count: Number(e.target.value),
//                 })
//               }
//               className="border p-2 w-full mb-2"
//             />
//             <label className="block mb-2">تخفیف</label>
//             <input
//               type="number"
//               placeholder="تخفیف"
//               value={editProduct.discount || ""}
//               onChange={(e) =>
//                 setEditProduct({
//                   ...editProduct,
//                   discount: Number(e.target.value),
//                 })
//               }
//               className="border p-2 w-full mb-2"
//             />

//             <div className="flex justify-end space-x-2 mt-4">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2"
//                 onClick={saveChanges}
//               >
//                 ذخیره
//               </button>
//               <button
//                 className="bg-gray-300 px-4 py-2"
//                 onClick={() => setEditProduct(null)}
//               >
//                 لغو
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import React from "react";

// export default function page() {
//   return <div></div>;
// }

// export interface IProductForSeller extends IProduct {
//   price: number;
//   count: number;
//   discount: number;
//   // sellerId: string;
// }

// import { useActionState } from "react";
// import { Stack } from "@mui/material";
// import AIForm from "@/components/forms/AIForm";
// import SubmitButton from "@/components/SubmitButton";
// import { updateSellerProduct } from "@/api/seller-api/getProducts";
// import { IProduct } from "@/api/server-api/type";
// import { createOrUpdateProductAction } from "@/action/products";

// export default function ProductEditForm({
//   defaultValue,
// }: {
//   defaultValue: IProductForSeller;
// }) {
//   const [state, action] = useActionState(createOrUpdateProductAction, {
//     message: "",
//     success: false,
//   });

//   return (
//     <form action={action}>
//       <input hidden name="id" defaultValue={defaultValue?.id} />
//       <Stack spacing={2} mt={2}>
//         <AIForm
//           schema={[
//             {
//               name: "price",
//               type: "number",
//               label: "قیمت جدید",
//               defaultValue: defaultValue?.price,
//               error: !!state.errors?.price,
//               helperText: state.errors?.price,
//             },
//             {
//               name: "count",
//               type: "number",
//               label: "تعداد جدید",
//               defaultValue: defaultValue?.count,
//               error: !!state.errors?.count,
//               helperText: state.errors?.count,
//             },
//             {
//               name: "discount",
//               type: "number",
//               label: "تخفیف",
//               defaultValue: defaultValue?.discount,
//               error: !!state.errors?.discount,
//               helperText: state.errors?.discount,
//             },
//           ]}
//         />
//         <SubmitButton variant="contained">ذخیره</SubmitButton>
//       </Stack>
//     </form>
//   );
// }
