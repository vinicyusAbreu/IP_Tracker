import { IpApi } from "./api.js";
import { UI } from "./ui.js";

const btn = document.querySelector('#btn');
const input = document.querySelector('#ipInput');
export const containerLoading = document.querySelector('.containerLoading');

const ipApi = new IpApi();
const ui = new UI();

ipApi.getIPusario()
    .then(valorIP => {

        ipApi.getApi(valorIP.ip)
            .then(resultado => {
                ui.inserirValoresUI(resultado);

            })
            .catch(erro => console.log(erro));

    }).catch(erro => console.log(erro));


btn.addEventListener('click', () => {

    if (validarEnderecoIP(input.value)) {

        ipApi.getApi(input.value)
            .then(resultado => ui.inserirValoresUI(resultado))
            .catch(erro => console.log(erro));
    }

});



function validarEnderecoIP(ipendereco) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipendereco)) {
        return (true)
    }

}