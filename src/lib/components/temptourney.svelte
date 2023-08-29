<div class="my-10 grid grid-cols-layout gap-7">
    {#each tournaments as { id, name, start, end, prizemoney }, index (id)}
        {#if id >= 0 && id <= 15}
            <div class="p-6 cardbg">
                <img
                    class="bg-brand2 text-white rounded-lg mx-auto opacity-100"
                    src="./tournament.svg"
                    height="150"
                    width="150"
                    alt="tourney"
                />
                <h3 class="text-text-dark font-semibold leading-snug mt-2">{name}</h3>
                <p class="text-text">{getDates(start)}</p>
                <p class="text-text">{formatCurrency(prizemoney)}</p>

                <button class="w-full mt-4 button">Main Page</button>
            </div>
        {/if}
    {/each}