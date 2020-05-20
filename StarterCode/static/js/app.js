const url = "https://github.com/JMGLIA/Interactive_Visualizations_and_Dashboard/blob/master/data/samples.json";

d3.json("https://gist.githubusercontent.com/JMGLIA/44a15de11dc308f935d15661f311dd08/raw/86615921eb05f36de44396f35d4a1412a252f615/jg-sample-json").then(function(data){
    console.log(data);
    for (let i=0; i <data.names.lenght; i++){
        $('#selDataset').append(`<option value=${data.names[i]}>${data.names[i]} </option>`);
    }
        var inputField = d3.select("#selDataset");
        inputField.on("change", function(){
            var user_pic_value = d3.event.target.value;
            $("#sample-metadata").empty();

            const result = data.samples.filter(user => user.id == user_pick_value);
            const metadata = data.metadata.filter(user => user.id == user_pick_value);
            $("#sample-metadata").append(`<p> id: ${metadata[0].id} <p>`);
            $("#sample-metadata").append(`<p> ethnicity: ${metadata[0].ethnicity} <p>`);
            $("#sample-metadata").append(`<p> gender: ${metadata[0].gender} <p>`);
            $("#sample-metadata").append(`<p> age: ${metadata[0].age} <p>`);
            $("#sample-metadata").append(`<p> location: ${metadata[0].location} <p>`);
            $("#sample-metadata").append(`<p> bbtype: ${metadata[0].bbtype} <p>`);
            $("#sample-metadata").append(`<p> wfreq: ${metadata[0].wfreq} <p>`);

            console.log(metadata);

            let sample_values = result[0].sample_values.slice(0, 10).reverse();
            let otu_ids = result[0].otu_ids.slice(0, 10).reverse();
            let otu_labels = result[0].otu_labels.slice(0, 10).reverse();
            console.log(sample_values);
            console.log(otu_ids);
            console.log(otu_labels);

            var trace1 = {
                x: sample_values
                y: 
                

            };
        })
});

// const bact_data = d3.json(data);
// console.log("Bacteria Data: ", bact_data);
