/* Kabhi kabhi enviroment variables load nhi hote hain to application load nhi ho pati
 aur chrash ho jati hain aur kabhi value hame string main nhi milti hain to hum yai karte hain.*/

// it's a good aprroch and it's a write way: ==>
const configur = {
  appwrite_blog_app_url: String(import.meta.env.VITE_BLOG_APP_URL),
  appwrite_blog_app_projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwrite_db_id: String(import.meta.env.VITE_APPWRITE_DB_ID),
  appwrite_table_id: String(import.meta.env.VITE_APPWRITE_TABELS_ID),
  appwrite_bucket_id: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default configur;
