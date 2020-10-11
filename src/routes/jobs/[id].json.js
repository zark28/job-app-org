import {jobs} from './_data';

export function get(req, res, next){
    const {id} = req.params;

    const job = jobs.find(j => j.id == id);
    
     //checking respons and sending a custom error if not found
    if (job){
        res.setHeader('Content-Type', 'applications/json');
    res.end(JSON.stringify(job));
    }else{
        res.statusCode =404;
        res.end(JSON.stringify({error: 'That job does not exist'}))
    }
    

}