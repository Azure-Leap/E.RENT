
export interface ICategory {
        _id:string,
        category_title:string,
        category_img:string,
        discription:string,
        category_type:string,
        subCategories:ISubcategory[];

}

export interface ISubcategory{
    cat_id:string,
    cat_title:string,
    cat_desc:string,
    cat_img:string

    
}
//  export const ICategories:any = [
//     {
//       id: '1',
//       name: 'Electronics',
//       subcategories: [
//         {
//           id: '1',
//           name: 'Phones',
//           categoryId: '1',
//         },
//         {
//           id: '2',
//           name: 'Laptops',
//           categoryId: '1',
//         },
//       ],
//     },
//     {
//       id: '2',
//       name: 'Clothing',
//       subcategories: [
//         {
//           id: '3',
//           name: 'Shirts',
//           categoryId: '2',
//         },
//         {
//           id: '4',
//           name: 'Pants',
//           categoryId: '2',
//         },
//       ],
//     },
//   ];
  