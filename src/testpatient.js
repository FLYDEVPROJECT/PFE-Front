<section>
<div className="row justify-content-center h-100 align-items-center">

<div className="col-lg-6 mb-5">
<div className="form-group">
<label className="text-label">
                   <strong >Mot de passe</strong>
                </label>
<input
 type="password"
 className="form-control"
 defaultValue="Password"
 name="password"
/>
</div>
</div></div>
<div className="row justify-content-center h-100 align-items-center">

<div className="col-lg-6 mb-3">
<div className="form-group">
<label className="text-label">
                   <strong >Confirmez le Mot de passe</strong>
                </label>
<input
 type="password"
 className="form-control"
 defaultValue="Password"
 name="password"
/>
</div>
</div></div>
          
            


<div class="row justify-content-end">

<div class="col-4">
</div>
</div>
<div class="row justify-content-end">
<div class="col-2">
<div class="row-4">

<div className="sweetalert mt-5">
<button
          onClick={() =>
             swal(
                "Félicitation ",
                "Votre compte a bien été crée",
                "success"
             )
          }
        
          className="btn btn-primary btn-block"                         >
        Valider
     </button>
     
</div></div>
    
</div>
</div>
</section>