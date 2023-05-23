import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { Request } from 'express';


const storage=multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './upload/');
    },
    filename:(req:Request,file,cb):void=>{
      const fileExt=path.extname(file.originalname);
      const fileName=Math.floor(Math.random()*1_000_000).toString(16);
      cb(null,`${fileName}${fileExt}`)
    }
}) 

const upload=multer({storage:storage})

export default upload;