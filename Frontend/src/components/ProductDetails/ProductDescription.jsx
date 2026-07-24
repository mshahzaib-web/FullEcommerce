import { useProductDetails } from "../../context/productDetailsContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductDescription() {
  const data = useProductDetails();
  const navigate = useNavigate();

  const handleAddReviewBtn = (product) => {
    navigate(`/user/${product._id}/add-review`, { state: { product } });
  };

  return (
    <>
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="grid grid-cols-3 border-b border-gray-200 mb-8">
          <button className="text-center py-3 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 w-1/2 focus:outline-none">
            Description
          </button>
          <Link
            to="/shop"
            className="text-center py-3 text-sm font-medium text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600  focus:outline-none"
          >
            Reviews (124)
          </Link>
          <button
            type="button"
            onClick={() => handleAddReviewBtn(data.product)}
            className="text-center py-3 text-sm font-medium text-gray-500 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600  focus:outline-none"
          >
            Add Review
          </button>
        </div>

        <div className="prose prose-sm text-gray-600 border-gray-300 border-2 rounded-md min-h-40 max-h-screen overflow-auto p-4">
          <p className="mb-4 leading-relaxed">
            {data.product.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor delectus, quo accusantium nihil, non debitis
            quaerat aliquam corporis magnam fuga voluptatibus culpa doloribus
            reprehenderit nam architecto! Minima non tempora quod delectus,
            facere voluptatem ad quas totam dicta nihil illum, dignissimos
            praesentium deserunt sunt rem? Quae ipsa suscipit fuga ea nisi,
            velit doloribus. Labore aperiam voluptates, ratione repellat
            reprehenderit tenetur quasi iure deleniti optio, illum, corrupti
            asperiores! Atque adipisci nobis quae eius voluptatibus rem eligendi
            praesentium, doloremque, non dolorem, illo molestias repudiandae vel
            corporis. Quas delectus repudiandae labore, eveniet similique
            aliquid enim amet aliquam, exercitationem ab molestiae debitis iste
            earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam rerum eius esse expedita, corrupti iusto officia sit,
            similique perferendis quam non dolore dolores ab! Molestiae ipsam
            aperiam rerum eius earum asperiores eligendi quia doloribus deleniti
            labore vel eveniet, iure corrupti repellendus natus quisquam
            excepturi veniam mollitia libero sint impedit? Optio placeat
          </p>
        </div>
      </div>
    </>
  );
}
