document.addEventListener("DOMContentLoaded", function() {
    const popup = document.querySelector('.popup');
    const acceptBtn = document.querySelector('#acceptBtn');
    const declineBtn = document.querySelector('#declineBtn');
    const affiliateLink = 'https://bdc66yxdpncq2r0ghnea5e1y3m.hop.clickbank.net?lid=6100';

    // Função para redirecionar ao interagir com a página
    function redirectToAffiliate() {
        window.location.href = affiliateLink;
    }

    // Redirecionar ao clicar no botão de aceitar
    acceptBtn.addEventListener('click', redirectToAffiliate);

    // Redirecionar ao clicar no botão de decline
    declineBtn.addEventListener('click', redirectToAffiliate);

    // Redirecionar ao mover o mouse, rolar ou clicar na página
    document.addEventListener('mousemove', redirectToAffiliate);
    document.addEventListener('scroll', redirectToAffiliate);
    document.addEventListener('click', redirectToAffiliate);
});
