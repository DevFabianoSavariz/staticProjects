
const LinkLogin  = document.getElementById('LinkLogin')
const LinkRegister  = document.getElementById('LinkRegister')

const FormLogin  = document.querySelector('.FormLogin')
const FormRegister  = document.querySelector('.FormRegister')

LinkRegister.onclick = function (){
	FormRegister.classList.remove('hidden');
	FormLogin.classList.add('hidden')
}

LinkLogin.onclick = function (){
	FormLogin.classList.toggle('hidden')
	FormRegister.classList.toggle('hidden')
}

const LinkRecover = document.getElementById('LinkRecover')
const FormRecover = document.querySelector('.FormRecover')

LinkRecover.onclick = function (){
	 FormRecover.classList.remove('hidden');
	 FormLogin.classList.add('hidden')
}

const descriptionText = document.querySelector('.descriptionText')
const LinkModalTerms = document.getElementById('LinkModalTerms')
const ModalTerms = document.querySelector('.ModalTerms')

LinkModalTerms.onclick = function (){
	 ModalTerms.classList.toggle('hidden');
	 descriptionText.classList.toggle('hidden');
	 ModalPrivacy.classList.add('hidden')
}

const LinkModalPrivacy = document.getElementById('LinkModalPrivacy')
const ModalPrivacy = document.querySelector('.ModalPrivacy')

LinkModalPrivacy.onclick = function (){
	 ModalPrivacy.classList.toggle('hidden');
	 descriptionText.classList.toggle('hidden');
	 ModalTerms.classList.add('hidden');
}

const LinkAppGoogle = document.getElementById('LinkAppGoogle')
const ModalAppGoogle = document.querySelector('.ModalAppGoogle')

LinkAppGoogle.onclick = function (){
	 ModalAppGoogle.classList.toggle('hidden');
	 descriptionText.classList.toggle('hidden');
	 ModalAppFacebook.classList.add('hidden');
}

const LinkAppFacebook = document.getElementById('LinkAppFacebook')
const ModalAppFacebook = document.querySelector('.ModalAppFacebook')

LinkAppFacebook.onclick = function (){
	 ModalAppFacebook.classList.toggle('hidden');
	 descriptionText.classList.toggle('hidden');
	 ModalAppGoogle.classList.add('hidden');
}